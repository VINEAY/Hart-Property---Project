"use client";

export default function ValuesSection() {
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Title */}
        <div className="bg-hart-light md:w-1/3 py-16 px-6 md:p-16">
          <div className="max-w-xs mx-auto">
            <h2 className="font-raleway">
              <span className="font-bold text-4xl block mb-2">Our</span>
              <span className="text-4xl block">Values</span>
            </h2>
          </div>
        </div>

        {/* Right Column - Values */}
        <div className="md:w-2/3 py-16 px-6 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ValueItem
              color="green"
              title="CREATIVITY"
              description="Creativity is at the heart of everything that we do."
            />
            <ValueItem
              color="yellow"
              title="IMAGINATION"
              description={
                <>
                  Dare to dream and imagine <br /> amazing spaces from an economical perspective.
                </>
              }
            />
            <ValueItem
              color="green"
              title="INSPIRATION"
              description="We take inspiration from around the world and bring it to life here in Adelaide."
            />
            <ValueItem
              color="pink"
              title="CURIOSITY"
              description={'We question conventions, ask "why not?" and explore smarter, more effective ways to design and develop.'}
            />
            <ValueItem
              color="green"
              title="DEVELOPED AESTHETIC"
              description="Every project must be as functional as it is beautiful, design that enhances the world around us."
            />
            <ValueItem
              color="yellow"
              title="THINK DIFFERENTLY"
              description={'We question conventions, ask "why not?" and explore smarter, more effective ways to design and develop.'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ValueItemProps {
  color: "green" | "yellow" | "pink";
  title: string;
  description: string | JSX.Element;
}

function ValueItem({ color, title, description }: ValueItemProps) {
  const getBulletColor = () => {
    switch (color) {
      case "green":
        return "bg-hart-green";
      case "yellow":
        return "bg-hart-yellow";
      case "pink":
        return "bg-hart-pink";
      default:
        return "bg-hart-blue";
    }
  };

  return (
    <div className="flex items-start">
      <div className={`w-4 h-4 mt-1 mr-4 ${getBulletColor()}`} />
      <div>
        <h3 className="font-bold uppercase text-sm mb-2 tracking-wide">{title}</h3>
        <p className="text-sm leading-relaxed text-hart-dark opacity-80">{description}</p>
      </div>
    </div>
  );
}
