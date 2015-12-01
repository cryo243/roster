module.exports = {
    findByName: function (req, res){

        User.find({ where: { firstName: { 'contains': req.param('name')}}, limit: 10 }).then(function(data,err){
            if(data){
                return   res.send(200, {data:data});
            }
            else {
                return  res.send(404, {error:err});
            }
        });

    },
    getAll: function (req, res) {
        User.find().then(function(data,err){
            if(data){
                return   res.send(200, {data:data});
            }
            else {
               return  res.send(404, {error:err});
            }
        });
        //return res.send(users);
    },
    makeIt: function(req, res) {
        return res.send("someone should be found!");
    }

};