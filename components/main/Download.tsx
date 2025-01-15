export default function Download() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 w-[500px]">
      <progress value={0.5} />
      <progress value={0.7} />
      <progress value={75} max={100} />
      <progress value={1} />
      </div>
    </section>
  );
}
