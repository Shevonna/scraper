var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
   
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  });
  
  // This creates our model from the above schema, using mongoose's model method
  var Article = mongoose.model("Article", ArticleSchema);
  
  // Export the Article model
  module.exports = Article;
  