function requestHandler(req, res) {
    UserActivation.findById(req.userId, function(err, user){
        if(err){
            res.send(err);
        }else{
            Tasks.findById(user.tasksId, function(err, user){
                if(err){
                    return res.send(err);

                }else{
                    tasks.completed = treu;
                    tasks.save(function (err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send("Task Completed")
                        }
                    })
                }
            })
        }
    })
    //Cualquier codigo
}