import ErrorMessage from "@/components/ErrorMessage";
import { withCenteredLayout } from "@/hoc";

const NotFoundContent = () => {
  return (
    <ErrorMessage
      title="404 - Page Not Found"
      message="The page you're looking for doesn't exist. It might have been moved or deleted."
      buttonText="Go to Home"
      buttonLink="/"
    />
  );
};

const NotFound = withCenteredLayout(NotFoundContent);

export default NotFound;
