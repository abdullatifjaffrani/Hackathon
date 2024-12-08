import Image from "next/image";

export function ExploreSection() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Main Featured Image */}
          <div className="col-span-12 md:col-span-6">
            <Image
              src="/assets/explore/main.png"
              alt="Featured Chair"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Grid with 4 individual images */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/assets/explore/card${i}.png`} // Dynamically set the unique image
                alt={`Chair ${i}`}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
