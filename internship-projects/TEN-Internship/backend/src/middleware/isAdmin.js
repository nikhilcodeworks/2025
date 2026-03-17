const isAdmin = (req, res, next) => {
  try {
    if(!req.jwtPayload || req.jwtPayload.role !== "admin") {
      return res.status(403).json({message: "Access denied. Admins only!"});
    }
    next();
  } catch(err) {
    console.log("An error occured while checking for admin =", err);
    return res.status(500).json({message: "Internal Server Error"});
  }
}

module.exports = isAdmin;