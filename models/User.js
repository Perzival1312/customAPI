const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:         {type: String, trim: true, required: true},
  email:        {type: String, uniquie: true, trim: true, required: true},
  password:     {type: String, required: true, select: false},
  codeLanguage: [{type: Schema.Types.ObjectId, ref: "Skill"}]
}, { timestamps: true });

// Users can be developers or just users
// if user is not dev they can search for user that is dev if they have the same skill


// Must use function here! ES6 => functions do not bind this!
UserSchema.pre("save", function(next) {
  // ENCRYPT PASSWORD
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

// Need to use function to enable this.password to work.
UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};
UserSchema.index({fields: 'text'});
module.exports = mongoose.model("User", UserSchema);
