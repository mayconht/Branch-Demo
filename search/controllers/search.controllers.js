exports.getById = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "User found",
        payload: {
            name : "Maycon Douglas Silva Santos",
            mail : "mdss@ibm.com"
        }
    });
}