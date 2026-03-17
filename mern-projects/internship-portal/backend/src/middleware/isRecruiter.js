const isRecruiter = (req, res, next) => {
  try {
    if (!req.jwtPayload || req.jwtPayload.role !== "recruiter") {
      return res.status(403).json({ message: "Access denied. Admins only!" });
    }
    next();
  } catch (err) {
    console.log("Authorization error =", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = isRecruiter;
