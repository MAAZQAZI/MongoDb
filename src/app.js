const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/FirstDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

  const playSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      validate(value) {
        if (value < 0) {
          throw new Error("Age must be positive");
        }
      }
    },
    email: String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const PlayList = new mongoose.model("PlayList", playSchema);
  
  const createData = async () => {
    try {
  
      const rnodePlaylist = new PlayList({
          name: "Nodedfvd js",
          age: 2230,
          email: "maaz@hotmail.com",
        });
  
  
      // const reactPlaylist = new PlayList({
      //   name: "Nodedfv js",
      //   age: 230,
      //   email: "maaz@hotmail.com",
      // });
      const result = await PlayList.insertMany([rnodePlaylist]);
      console.log(result);
  
    } catch (error) {
      console.log(error);
    }
  };
  
  createData();
  
  const getDocument = async () => {
      try {
  
          const result = await PlayList.find({age:230})
          .select("name email").countDocuments();
          console.log(result);
  
      }
      catch (error) {
          console.log(error);
      }
  }
  
  const updateDoucment = async (_id) => {

      try {

          const result = await PlayList.findOneAndUpdate({_id}, {$set:
             {
              name: "Node ha bhi js whi ha"
            
            
            }},{
              new: true,
              usefindAndModify: true});
          console.log(result);

      }
      catch (error) {

          console.log(error);

      }
  }
  
  //getDocument();
  //updateDoucment("62dfb3387ec93e98a4297479");


  const deleteDocument = async (_id) => {

      try {

          const result = await PlayList.findOneAndDelete({_id});
          console.log(result);

      }
      catch (error) {

          console.log(error);

      }
  }

  //deleteDocument("62dfb3387ec93e98a4297479");

  