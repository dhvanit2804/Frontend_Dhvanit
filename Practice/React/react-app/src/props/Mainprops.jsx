import React from "react";
import Classprops from "./Classprops";
import Funsprops from "./Funsprops";

function Mainprops() {
  return (
    <div className="container">
      <h1>This is MainProps file</h1>

      <div className="row mt-5">
        <h1>This is ClassProps</h1>
        <Classprops
          title="Armani"
          des="This is luxery brand in Clothing Segment"
          img="https://imgs.search.brave.com/OhhkEf73tsGyQW9_A9I05FgsSqKQZFVZ52d0kaOKuXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdjL0FybWFuaV9h/dF9JbmRvb3Jvb3Bp/bGx5X1Nob3BwaW5n/X0NlbnRyZV8wOC5K/UEc"
        />
        <Classprops
          title="Nike"
          des="This is SportWear brand and also Popular in thier Air-Jorden"
          img="https://imgs.search.brave.com/xXdZSnfjNhIelEk4pzajBEZ-TW4HCad1YyD37rzrIuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MTMwODY5OC9waG90/by9sb3MtYW5nZWxl/cy1jYS1hLW5pa2Ut/Y29ycG9yYXRlLWxv/Z28taGFuZ3Mtb24t/dGhlLWZyb250LW9m/LXRoZWlyLXN0b3Jl/LWF0LXRoZS1ncm92/ZS1vbi1hcHJpbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X3VHUUtyamt1ZWsz/WTJjeFVHQUFuMmxK/M3JRWmFZNGpLVTRo/em9wYjV0MD0"
        />
        <Classprops
          title="Dominos"
          des="This is Most Popular Pizza Chain In All Over the World"
          img="https://imgs.search.brave.com/qPo0_Wr_sgqm5A0OAiTNjesUL12GrFwsK050x7xMzlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzc2LzkwLzE4/LzM2MF9GXzQ3Njkw/MTgxMV9QSXl1SEtQ/M2g3cGdZM2ZWOGlI/dVRjblk2Vk9yOEt2/eC5qcGc"
        />
      </div>

      <div className="row">
        <h1 className="mb-4">This Function Props</h1>
        <Funsprops
          title="mercedes"
          des="This is mercedes brand Car"
          img="https://www.edmunds.com/assets/m/cs/blt5b9136f6669827e3/640fb520a43dca105a6868cf/2024_Mecedes_Benz_GLC_Coupe_2_1600.jpg"
        />
        <Funsprops
          title="BMW"
          des="This is BMW brand Car"
          img="https://img.gta5-mods.com/q75/images/bmw-m5-f90-downpipes-system-sound-darkez/4178dd-d22319d3bab6c17b437e3c97ad6b1776.png"
        />
        <Funsprops
          title="Jaguar"
          des="This is Jaguar brand Car"
          img="https://cars.usnews.com/static/images/Auto/custom/15251/2024_Jaguar_F-Type_Angular_Front_1.jpg"
        />
      </div>
    </div>
  );
}

export default Mainprops;
