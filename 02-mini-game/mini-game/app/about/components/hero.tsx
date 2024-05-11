import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container py-40 flex items-center">
      <div className="">
        <h1 className="font-bold text-4xl">Hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam
          ratione soluta ipsam tempora, blanditiis rerum sint adipisci dolore
          repellat corrupti itaque repellendus atque autem beatae obcaecati quia
          consequatur eos.
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </section>
  );
}
