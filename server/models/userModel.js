import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Exclude password from queries by default for security purpose
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "user",
    },
    accountVerified: {
      type: Boolean,
      default: false,
    },
    borrowedBooks: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Borrow",
        },

        returned: {
          type: Boolean,
          default: false,
        },
        bookTitle: String,
        borrowedDate: {
          dueDate: Date,
        },
      },
    ],
    avatar: {
      public_id: String,
      url: String,
    },
    verificationCode: Number,
    VerificationCodeExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);
userSchema.methods.generateVerificationCode = function () {
  function generateRandomFiveDigitNumber() {
    const firstDigit = Math.floor(Math, random() * 9) + 1; //it generates a verification code in which 1st digit cannot be zero
    const remainingDigits = Math.floor(Math.random() * 10000) //convert remaining number in to string
      .toString()
      .padStart(4, 0);
    return parseInt(firstDigit + remainingDigits); //add first digit and remaining string 4+"9234"= 49234
  }
  const verificationCode = generateRandomFiveDigitNumber();
  this.verificationCode = verificationCode;
  this.verificationCodeExpire = Date.now() + 15 * 60 * 1000; //otp expire in 15 minutes
};
export const User = mongoose.model("User", userSchema);
