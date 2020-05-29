exports.getUser = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "User found",
        payload: {
            name : "Maycon Douglas Silva Santos",
            mail : "mdss@ibm.com"
        }
    });
};

exports.getCompany = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "company found",
        payload: {
            name : "International Business Machine",
            fantasy : "IBM",
            location: "Brazil",
            info : "no other info available"
        }
    });
}


exports.getPet = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Pet found",
        payload: {
            name : "Chiquinho",
            location: "in his bed",
            info : "just sleeping as usual"
        }
    });
}