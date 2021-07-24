import React from "react";

interface contentSectionProps {
  className?: string;
  maxW?: string;
}

/**
 * @param children Rendered inside the component
 * @param className CSS classes applied to the most inner div
 */

const ContentSection: React.FC<contentSectionProps> = ({
  children,
  className,
  maxW,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className={`${maxW ? maxW : "max-w-7xl"} w-full flex ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
