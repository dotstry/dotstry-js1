let weapon = null;
let room = "gallery";
let suspect = "Ms. Van Cleeve";
let solved = false;

if (room == "ballroom")
    {
         weapon = "poison";
    }
else if (room == "gallery")
    {
         weapon = "trophy";
    }
else if (room == "billiards room")
    {
         weapon = "pool stick";
    }
else if (room == "dining room")
    {
         weapon = "knife";
    }

if ((room == "dining room" && suspect == "Mr. Parkes") || (room == "gallery" && suspect == "Ms. Van Cleeve") || (room == "billiards room" && suspect == "Mrs. Sparr") || (room === "ballroom" && suspect === "Mr. Kalehoff"))
    {
        solved = true;
    }
else
    {
        solved = false;
    }

if (solved == true)
{
    console.log( suspect + " did it in the " + room + " with the " + weapon + "!");
}
else
{
    console.log("The case isn't solved! " + suspect + " was in the " + room + " the entire night.");
}