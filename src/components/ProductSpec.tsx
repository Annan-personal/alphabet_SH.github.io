import React from "react";

interface ProductSpecProps {
  specification: {
    material: string;
    weave: string;
    strand: string;
    gsm: string;
    window: number;
    door: number;
    retractable: number;
    patio: number;
    protection: number;
    airflow: number;
    visibility: number;
    strength: number;
    petSafe: number;
    balRating: string;
  };
  sizes: Array<{
    width: string;
    length: string;
    palletQty?: string;
    cartonQty?: string;
    code: string;
  }>;
  headerColor: string;
}

const ProductSpec: React.FC<ProductSpecProps> = ({ specification, sizes, headerColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Specification Table */}
      <div className="border rounded-lg overflow-hidden mb-6">
        <div style={{ backgroundColor: headerColor }} className="text-white text-lg font-bold p-2">
          SPECIFICATION
        </div>
        <div className="grid grid-cols-4 border-b">
          <div className="p-2 text-center">MATERIAL</div>
          <div className="p-2 text-center">WEAVE</div>
          <div className="p-2 text-center">STRAND</div>
          <div className="p-2 text-center">GSM</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="p-2 text-center">{specification.material}</div>
          <div className="p-2 text-center">{specification.weave}</div>
          <div className="p-2 text-center">{specification.strand}</div>
          <div className="p-2 text-center">{specification.gsm}</div>
        </div>
        {/* Application icons */}
        <div className="grid grid-cols-4 border-t">
          <div className="p-2 text-center">WINDOW</div>
          <div className="p-2 text-center">DOOR</div>
          <div className="p-2 text-center">RETRACTABLE</div>
          <div className="p-2 text-center">PATIO</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="p-2 text-center">{'•'.repeat(specification.window)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.door)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.retractable)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.patio)}</div>
        </div>
        <div className="grid grid-cols-6 border-t">
          <div className="p-2 text-center">PROTECTION</div>
          <div className="p-2 text-center">AIRFLOW</div>
          <div className="p-2 text-center">VISIBILITY</div>
          <div className="p-2 text-center">STRENGTH</div>
          <div className="p-2 text-center">PET SAFE</div>
          <div className="p-2 text-center">BAL RATING</div>
        </div>
        <div className="grid grid-cols-6">
          <div className="p-2 text-center">{'•'.repeat(specification.protection)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.airflow)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.visibility)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.strength)}</div>
          <div className="p-2 text-center">{'•'.repeat(specification.petSafe)}</div>
          <div className="p-2 text-center font-bold text-blue-600">{specification.balRating}</div>
        </div>
      </div>

      {/* Sizes Table */}
      <div className="border rounded-lg overflow-hidden">
        <div style={{ backgroundColor: "#002366" }} className="text-white text-lg font-bold p-2">
          SIZE OPTIONS
        </div>
        <div className="grid grid-cols-4 border-b">
          <div className="p-2 text-center">WIDTH</div>
          <div className="p-2 text-center">LENGTH</div>
          {sizes[0].palletQty && <div className="p-2 text-center">PALLET QTY</div>}
          {sizes[0].cartonQty && <div className="p-2 text-center">CARTON QTY</div>}
          <div className="p-2 text-center">CODE</div>
        </div>
        {sizes.map((size, index) => (
          <div className="grid grid-cols-4 border-t" key={index}>
            <div className="p-2 text-center">{size.width}</div>
            <div className="p-2 text-center">{size.length}</div>
            {size.palletQty && <div className="p-2 text-center">{size.palletQty}</div>}
            {size.cartonQty && <div className="p-2 text-center">{size.cartonQty}</div>}
            <div className="p-2 text-center">{size.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpec;
