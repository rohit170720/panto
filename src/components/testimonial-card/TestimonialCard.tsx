import type { TestimonialCardProps } from "../../types/types";

// StarIcon component for rendering individual stars
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-orange-400" : "text-gray-300"}`}
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M9.049 2.927c.3-.921 1.62-.921 1.92 0l1.242 3.824a1 1 0 00.95.691h4.025c.969 0 1.371 1.24.588 1.81L14.73 11.2a1 1 0 00-.363 1.118l1.242 3.824c.3.921-.755 1.688-1.538 1.118L10 15.115a1 1 0 00-1.176 0l-3.238 2.357c-.783.57-1.838-.197-1.538-1.118l1.242-3.824a1 1 0 00-.363-1.118L2.446 9.252c-.783-.57-.381-1.81.588-1.81h4.025a1 1 0 00.95-.691l1.242-3.824z' />
  </svg>
);

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) => {
  return (
    <div
      className={`bg-cover bg-center rounded-lg   shadow-2xl border border-gray-100 p-4 pb-0 flex flex-col justify-between transform transition duration-300 hover:scale-[1.02] !min-w-full  sm:!min-w-[calc(50%_-_0.5rem)]  md:!min-w-[calc(33%_-_0.66rem)] min-h-[25rem] relative`}
      style={{ backgroundImage: `url('${testimonial.backgroundImage}')` }}
    >
      <div className='absolute bottom-4 left-4 right-4'>
        <div className='relative bg-white pt-7 pb-4 bottom-0  rounded-xl shadow-lg border border-gray-200 '>
          {/* Profile Image (absolute positioning) */}
          <div className='absolute -top-7 left-1/2 transform -translate-x-1/2'>
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className='w-13 h-13  rounded-full border-4 border-white object-cover shadow-md'
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/128x128/AAAAAA/FFFFFF?text=Profile";
              }} // Fallback
            />
          </div>

          {/* Testimonial details */}
          <div className='text-center mt-4'>
            <h3 className='sm:text-lg font-semibold text-gray-800 mb-1'>
              {testimonial.name}
            </h3>
            <p className='text-sm text-gray-500 mb-4'>{testimonial.title}</p>

            {/* Quote */}
            <p className='text-sm  text-gray-700 leading-relaxed italic mb-6'>
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Star Rating */}
            <div className='flex justify-center items-center space-x-1'>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
