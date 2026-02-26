import Image from "next/image";

type ProfileCardProps = {
  name: string;
  image: string;
  positions: string[];
};

export default function TeamCard({
  name,
  image,
  positions,
}: ProfileCardProps) {
  return (
    <div className="flex w-full max-w-2xl h-64 bg-white rounded-2xl shadow-md overflow-hidden border border-orange-400">
      
      {/* Left Side - Image */}
      <div className="relative w-1/2 h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          {name}
        </h2>

        <p className="text-sm font-semibold mb-2">Specializations:</p>

        <div className="flex flex-wrap gap-2">
          {positions.map((pos, index) => (
            <span
              key={index}
              className="px-4 py-1 text-xs bg-gray-200 rounded-full"
            >
              {pos}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}