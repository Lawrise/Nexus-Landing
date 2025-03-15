const LearningPathFeature: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 w-full items-center relative border">
      <div className="flex w-full justify-center rounded-md">
        <div className="flex flex-col gap-8 w-full mx-auto justify-start py-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Learning path
            <br className="block sm:hidden md:block" />
            tailored for you.
          </h1>
          <p className="text-lg md:text-xl">
            Define what you want to learn and why it matters to you.
            <br className="hidden md:block" />
            Let us create a learning path that is tailored to you.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 justify-center rounded-md">
          <div className="flex flex-col gap-8 w-full mx-auto justify-start py-12">
            <h1 className="">
              Knowledge Analysis
              <br className="block sm:hidden md:block" />
              AI assesses your current understanding and identifies gaps.
            </h1>
            <p className="">
              This ensures that you are building on a solid foundation.
              <br className="hidden md:block" />
              Let us create a learning path that is tailored to you.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full mx-auto justify-start py-12">
            <h1 className="">
              Path Generation
              <br className="block sm:hidden md:block" /> Custom curriculum
              creation with resources tailored to you.
            </h1>
            <p className="">
              This includes videos, articles, and quizzes that are designed to
              help you learn.
              <br className="hidden md:block" />
              Let us create a learning path that is tailored to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathFeature;
