import { Button, PageHero } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="A LITTLE DETOUR"
        title="This page has wandered."
        text="Let’s take you back to something beautiful."
      />
      <div className="wrap section">
        <Button href="/">Back to Mishi</Button>
      </div>
    </>
  );
}
