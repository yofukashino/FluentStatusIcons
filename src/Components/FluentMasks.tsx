export const online = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 C 0.776 1 1 0.776 1 0.5 C 1 0.224 0.776 0 0.5 0 M 0.125 0.5 C 0.125 0.293 0.293 0.125 0.5 0.125 C 0.707 0.125 0.875 0.293 0.875 0.5 C 0.875 0.707 0.707 0.875 0.5 0.875 C 0.293 0.875 0.125 0.707 0.125 0.5"
    />
    <circle fill="white" cx="0.5" cy="0.5" r="0.2" />
    {children}
  </mask>
);

export const phone = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.813 0 C 0.918 0 1 0.051 1 0.113 L 1 0.887 C 1 0.949 0.918 1 0.813 1 L 0.188 1 C 0.082 1 0 0.949 0 0.887 L 0 0.113 C 0 0.051 0.082 0 0.188 0 Z M 0.813 0.074 L 0.188 0.074 C 0.152 0.074 0.125 0.09 0.125 0.113 L 0.125 0.887 C 0.125 0.91 0.152 0.926 0.188 0.926 L 0.813 0.926 C 0.848 0.926 0.875 0.91 0.875 0.887 L 0.875 0.113 C 0.875 0.09 0.848 0.074 0.813 0.074 Z M 0.605 0.773 C 0.637 0.773 0.668 0.793 0.668 0.813 C 0.668 0.832 0.641 0.852 0.605 0.852 L 0.395 0.852 C 0.363 0.852 0.332 0.832 0.332 0.813 C 0.332 0.793 0.359 0.773 0.395 0.773 Z"
    />
    {children}
  </mask>
);

export const idle = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.604 0.01 C 0.67 0.02 0.709 0.043 0.764 0.082 C 0.859 0.145 0.933 0.229 0.971 0.349 C 1.031 0.551 0.938 0.765 0.832 0.863 C 0.778 0.905 0.718 0.946 0.647 0.968 C 0.301 1.061 0.051 0.842 0.01 0.541 C 0.088 0.56 0.158 0.588 0.234 0.577 C 0.446 0.553 0.613 0.361 0.618 0.179 C 0.629 0.118 0.611 0.057 0.604 0.01 Z M 0.725 0.181 C 0.723 0.253 0.686 0.412 0.577 0.52 C 0.509 0.591 0.446 0.623 0.367 0.649 C 0.237 0.679 0.206 0.674 0.154 0.676 C 0.184 0.739 0.236 0.786 0.295 0.821 C 0.329 0.843 0.367 0.86 0.406 0.871 C 0.639 0.943 0.81 0.764 0.867 0.617 C 0.954 0.354 0.751 0.197 0.725 0.181 Z"
    />
    {children}
  </mask>
);

export const dnd = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.5 0 C 0.223 0 0 0.223 0 0.5 C 0 0.777 0.223 1 0.5 1 C 0.777 1 1 0.777 1 0.5 C 1 0.223 0.777 0 0.5 0 Z M 0.125 0.5 C 0.125 0.293 0.293 0.125 0.5 0.125 C 0.707 0.125 0.875 0.293 0.875 0.5 C 0.875 0.707 0.707 0.875 0.5 0.875 C 0.293 0.875 0.125 0.707 0.125 0.5 Z M 0.25 0.5 C 0.25 0.465 0.277 0.438 0.313 0.438 L 0.688 0.438 C 0.723 0.438 0.75 0.465 0.75 0.5 C 0.75 0.535 0.723 0.563 0.688 0.563 L 0.313 0.563 C 0.277 0.563 0.25 0.535 0.25 0.5 Z"
    />
    {children}
  </mask>
);

export const offline = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 C 0.776 1 1 0.776 1 0.5 C 1 0.224 0.776 0 0.5 0 M 0.125 0.5 C 0.125 0.293 0.293 0.125 0.5 0.125 C 0.707 0.125 0.875 0.293 0.875 0.5 C 0.875 0.707 0.707 0.875 0.5 0.875 C 0.293 0.875 0.125 0.707 0.125 0.5"
    />
    {children}
  </mask>
);

export const stream = ({
  children,
  ...props
}: React.SVGProps<SVGMaskElement> & { children?: React.ReactNode }): React.ReactElement => (
  <mask maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" style={props.style} {...props}>
    <path
      fill="white"
      d="M 0.5 0.125 C 0.293 0.125 0.125 0.293 0.125 0.5 C 0.125 0.707 0.293 0.875 0.5 0.875 C 0.707 0.875 0.875 0.707 0.875 0.5 C 0.875 0.293 0.707 0.125 0.5 0.125 Z M 0 0.5 C 0 0.223 0.223 0 0.5 0 C 0.777 0 1 0.223 1 0.5 C 1 0.777 0.777 1 0.5 1 C 0.223 1 0 0.777 0 0.5 Z M 0 0.5 M 0.746 0.469 L 0.434 0.281 C 0.398 0.262 0.352 0.289 0.352 0.332 L 0.352 0.668 C 0.352 0.711 0.398 0.738 0.434 0.719 L 0.746 0.531 C 0.77 0.52 0.77 0.48 0.746 0.469 Z"
    />
    {children}
  </mask>
);

export default { online, phone, idle, dnd, offline, stream };
