import { Candidate } from '../models/Candidatemodels.js';
import { User } from '../models/Usermodels.js';

const checkAdminRole = async(userID) => {
    try {
        const user = await User.findById(userID)
        if(user.role === 'admin')
        return true;
    } catch (error) {
        return false;
    }
}

const addCandidate = async (req,res) => {
    try {
        if(! await checkAdminRole(req.user.id))
        return res.status(403).json({success:false, msg:'user does not have admin role'})
        
        const data = req.body
        const newCandidate = new Candidate(data)
        const response = await newCandidate.save()
        res.status(200).json({success:false, response:response})

    } catch (error) {
        res.status(500).json({success:false,msg: "Internal Server Error"})
    }
}

