const isStudent = (req, res, next) => {
  try {
    if (!req.jwtPayload || req.jwtPayload.role !== "student") {
      return res.status(403).json({ message: "Access denied. Students only!" });
    }
    next();
  } catch (err) {
    console.log("Authorization error =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = isStudent;
