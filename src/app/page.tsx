import Image from "next/image";
import { Practice } from "@/components/practice";
import { Fun } from "@/components/practice1";

export default function Home() {
  return (
    <div>
      <Practice></Practice>
      <Fun></Fun>
      <select>
        <option value="option1" >Option 1</option>
        <option value="option2" >Option 2</option>
      </select>

      <button>Click me</button>


    </div>
  );
}
