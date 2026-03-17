import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle, Notifications, Search } from "@mui/icons-material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Search Click
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search_page?query=${searchTerm}`);
    }
  };

  return (
    <nav className="bg-neutral-900 sticky top-0 z-50">
      <div className="max-w-9xl mx-auto px-4 lg:px-8 bg-neutral-900">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Job Portal</div>

          {/* Mobile Search Bar (Hidden on larger screens) */}
          <div className="md:hidden flex flex-grow mx-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Search />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="text-white hover:text-blue-500">
              <Notifications className="h-6 w-6" />
            </button>

            {/* Profile Icon */}
            <button
              onClick={handleMenu}
              className="text-white hover:text-blue-500"
            >
              <AccountCircle className="h-6 w-6" />
            </button>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/profile" onClick={handleClose}>
                Profile
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
