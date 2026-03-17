import { useState, useEffect } from "react";
import { skills } from "../../lib/studentSkills";

export default function SkillsDropdown({ selectedSkills, setSelectedSkills }) {
  const [query, setQuery] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [showDropdown, setShowDropdown] = useState("");

  useEffect(() => {
    if(query) {
      setFilteredSkills(
        skills.filter(skill => skill.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setFilteredSkills([]);
    }
  }, [query]);

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setQuery("");
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s=> s!==skill));
  };

  return (
    <div className="w-full relative">
      {/*Input fields */}
      <input
        type="text"
        placeholder="Type to search skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        className="mb-2 mt-2 border rounded-lg p-2 w-full max-w-[800px] focus:outline-none"
      />

      {/*Dropdowm List */}
      {showDropdown && (
        <div className="absolute top-11 left-0 w-full bg-white rounded-md max-h-40 z-10 mt-1.5">

          {filteredSkills.length >0 && (
            <ul className="border rounded-md p-2 bg-white max-h-40 overflow-auto">
              {filteredSkills.map((skill, index) => (
                <li
                  key={index}
                  onClick={() => addSkill(skill)}
                  className="cursor-pointer hover:bg-gray-200 p-1" >
                    {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/*Selected skills List */}
      <div className="flex flex-wrap gap-3 mt-2">
        {selectedSkills.map((skill,index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full text-blue-600"
          >
            {skill}
            {/*Remove skill Button */}
            <button type="button"
              onClick={() => removeSkill(skill)}
              className="ml-1 hover:text-red-500 font-bold"
            >
              X
            </button>
            </div>
        ))}
      </div>
    </div>
  );
}