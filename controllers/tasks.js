const Todo = require('../modal/model')

const postData=async (req,res)=>{
   const task = await Todo.create(req.body)
   console.log(task);
   if(!task){
      return res.status(404).send('cannot post data')
   }
   res.status(200).json(task)
}

const getData=async (req,res)=>{
   const task = await Todo.find({})
   res.status(200).json({task})
}

const updateData =async (req,res)=>{
     try {
        const {id:taskID} = req.params;
        const task = await Todo.find({_id:taskID},req.body,{new:true})
        if(!task){
            res.status(404).send('no id found')
        }
        res.status(200).json({task})
     } catch (error) {
         console.log(error)
     }
}

const deleteData = async (req,res)=>{
   try {
      const{id:taskID} = req.params;
      const task = await Todo.findOneAndDelete({_id:taskID})
      if(!task){
         res.status(404).send('no id found')
      } 
      res.status(200).json({task})
   } catch (error) {
      console.log(error)
   }
}


module.exports = {postData,getData,updateData,deleteData}