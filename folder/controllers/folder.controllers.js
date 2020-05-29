
const si = require('systeminformation');


exports.getSystem = (req, res) => {
    si.cpu()
        .then(data => {
            res.status(200).json({
                status: "success",
                message: "System found",
                payload: {
                    manufucturer: data.manufacturer,
                    speed: data.speed,
                    cores: data.cores,
                    physicalCore: data.physicalCores
                }
            });
        })
        .catch(error => res.status(400).json({
            status: "error",
            message: "System Error",
            payload: ""
        }));
}