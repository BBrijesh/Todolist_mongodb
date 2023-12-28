var usermodel = require('../model/usermodel');

exports.insert = async (req,res) =>{

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status: 'success',
        data
    });
}
exports.select = async (req,res) =>{

    var data = await usermodel.find();

    res.status(200).json({
        status: 'success',
        data
    });
}
exports.run = async (req,res) =>{

    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:'running'});

    res.status(200).json({
        status: 'status Update',
        data
    });
}

exports.running = async (req,res) =>{

    var data = await usermodel.find({status:'running'});

    res.status(200).json({
        status: 'data is running',
        data
    });
}
exports.pen = async (req,res) =>{

    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:'pending'});

    res.status(200).json({
        status: 'status Update',
        data
    });
}

exports.pending = async (req,res) =>{

    var data = await usermodel.find({status:'pending'});

    res.status(200).json({
        status: 'data is pending',
        data
    });
}
exports.dec = async (req,res) =>{

    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:'decline'});

    res.status(200).json({
        status: 'status Update',
        data
    });
}

exports.decline = async (req,res) =>{

    var data = await usermodel.find({status:'decline'});

    res.status(200).json({
        status: 'data is decline',
        data
    });
}
exports.com = async (req,res) =>{

    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:'completed'});

    res.status(200).json({
        status: 'status Update',
        data
    });
}

exports.completed = async (req,res) =>{

    var data = await usermodel.find({status:'completed'});

    res.status(200).json({
        status: 'data is completed',
        data
    });
}


exports.delete = async (req,res) =>{

    var data = await usermodel.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: 'data deleted',
        data
    });
}
exports.update = async (req,res) =>{

    var data = await usermodel.findByIdAndUpdate(req.params.id,req.body);

    res.status(200).json({
        status: 'data updated',
        data
    });
}
