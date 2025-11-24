type AvatarTitleProps = {
    children: React.ReactNode;
}
export const AvatarTitle = ({ children }: AvatarTitleProps) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}