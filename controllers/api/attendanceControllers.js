const Attendance = require('../../models/attendance');

// for marking the attendance
module.exports.markPresent = async function(req, res){
    
    try {

        // first find the attendance of user
        let a = await Attendance.find({
            user: req.user._id
        });

        // now check if the user has made it's attendance or not
        let att = a.filter((item) => {
            let date = item.date;
            let month = date.getUTCMonth() + 1;
            let day = date.getUTCDate();
            let year = date.getUTCFullYear();
            let today = new Date();
            if(month == today.getUTCMonth() + 1 && day == today.getUTCDate() && year == today.getUTCFullYear()){
                return item;
            }
        });

        // if the length is 0 , it means user doesn't make its attendance
        if(att.length == 0){
            // create attendance
            let attendance = await Attendance.create({
                user: req.user._id,
                markPresent: req.body.markPresent
            });
            return res.status(200).json({
                message: 'Attendance marked successfully !!'
            });
        } else {
            return res.status(207).json({
                message: 'User already marked its attendance !!'
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        });
    }

}

// getting all the present users of today
module.exports.totalUsersPresentToday = async function(req, res){
    
    try {
        
        // first find all the attendance of user
        let a = await Attendance.find({})
        .populate('user', '-password -createdAt -updatedAt');  // - is used to prevent some fiels to populate
        // now filter the today's attendance
        let att = a.filter((item) => {
            let date = item.date;
            let month = date.getUTCMonth() + 1;
            let day = date.getUTCDate();
            let year = date.getUTCFullYear();
            let today = new Date();
            if(month == today.getUTCMonth() + 1 && day == today.getUTCDate() && year == today.getUTCFullYear()){
                return item;
            }
        });

        return res.status(200).json({
            message: 'success',
            users: att
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        });
    }

}