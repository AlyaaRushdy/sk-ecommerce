
import React from 'react';
import HydratingOil from "../../assets/HydratingOil.jpg"; 
import { Button } from '../ui/button';
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function Product() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg max-w-5xl">
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <img src={HydratingOil} alt="Hydrating Oil" className="mx-auto mb-4" />
          </div>
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-2">HYDRATING OIL</h1>
          <p className="text-lg text-gray-700 mb-4">LE 259.00 EGP</p>
          <div className="flex items-center mb-4">
            <button className="border border-gray-400 px-2 py-1">-</button>
            <span className="mx-2">1</span>
            <button className="border border-gray-400 px-2 py-1">+</button>
          </div>
         <Button className="py-2 px-4 rounded-xl mb-2 w-full">ADD TO CART</Button>
          <RadioGroupDemo /> 
          <p className="text-gray-700 mt-4">
            Indulge in a complex and feminine layering oil with notes of raspberry, jasmine, and vanilla...
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li><strong>Top notes:</strong> Strawberry, Blackberry accord.</li>
            <li><strong>Middle notes:</strong> Jasmine accord.</li>
            <li><strong>Base notes:</strong> Vanilla, Amber, Sandalwood.</li>
          </ul>
          <p className="text-gray-700 mt-4"><strong>Volume:</strong> 6 ml</p>
        </div>
      </div>
    </div>
  );
}

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="pink">
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pink" id="color-pink" />
          <Label className="text-gray-600">Pink</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gold" id="color-gold" />
          <Label className="text-gray-600" >Gold</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="white" id="color-white" />
          <Label className="text-gray-600">White</Label>
        </div>
      </div>
    </RadioGroup>
  );
}