const AuthSessionStatus = ({
  status,
  className,
  ...props
}: {
  status: any;
  className: any;
}) => (
  <>
    {status && (
      <div
        className={`${className} text-sm font-medium text-green-600`}
        {...props}
      >
        {status}
      </div>
    )}
  </>
);

export default AuthSessionStatus;
