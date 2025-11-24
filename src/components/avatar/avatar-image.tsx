import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'
type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
    size?: AvatarSize;
}
const avatarSize = {
    xs: 'h-5 w-5',
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
}
export const AvatarImage = ({ src, alt, size = 'sm', ...rest }: AvatarImageProps) => {
    return (
        <div className={cn('relative overflow-hidden rounded-full border-blue-200 border-[1px]', avatarSize[size])}>
            <Image src={src} alt={alt} {...rest} fill />
        </div>
    )
}