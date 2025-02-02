import CommonLayout from "@/component/layouts/CommonLayout"
import { PricingCard } from "@/component/pricing/pricingCard"


export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: 2000,
      originalPrice: 2500,
      icon: "circle" as const,
      features: [
        { text: "Portfolio visible to people from 3 districts of your choice" },
        { text: "Showcase up to 3 projects" },
        { text: "Add up to 1 professional fields to your profile" },
        { text: "Apply up to 5 jobs" },
      ],
    },
    {
      title: "Plus",
      price: 3500,
      originalPrice: 5000,
      icon: "plus" as const,
      features: [
        { text: "Portfolio visible to people from 5 districts of your choice" },
        { text: "Showcase up to 5 projects" },
        { text: "Upload up to 5 images for each project" },
        { text: "Add up to 1 professional fields to your profile" },
      ],
    },
    {
      title: "Advanced",
      price: 5000,
      originalPrice: 8000,
      icon: "cross" as const,
      features: [
        { text: "Portfolio visible to people from 10 districts of your choice" },
        { text: "Showcase up to 10 projects" },
        { text: "Upload up to 7 images for each project" },
        { text: "Add unlimited professional fields to your profile" },
      ],
    },
  ]

  return (
    <div className="h-auto bg-[#CDFFFF] ">
      <CommonLayout>

      <div className="mx-auto w-[100%]">
        <div className="text-center mb-8">
          <h1 className="text-[48px] font-semibold mb-2 text-[#000] tracking-[-0.444px] leading-[64px]">
            Pricing Plans For Professionals
          </h1>

          <p className="text-black mb-6 tracking-[-0.16px] text-center text-base font-normal leading-[23.111px] font-workSans">
            Choose the best plan for your business. Change plans as you grow.
          </p>

          <select className="w-full md:w-[30%] rounded-md  bg-[#006] text-white px-2 py-2 text-sm">
            <option>Choose your profession to see the pricing plans</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PricingCard {...plans[0]} />
          <PricingCard {...plans[1]} variant="featured" />
          <PricingCard {...plans[2]} />
        </div>
      </div>
      </CommonLayout>
    </div>
  );
}

