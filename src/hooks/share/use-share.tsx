import { useCallback, useMemo } from 'react';
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './social-providers';
import { useClipboard } from '../clipboard/use-clipboard';
import { CheckIcon, ClipboardIcon } from 'lucide-react';

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({ url, title, text }: UseShareProps) => {
  const { isCopied, handleClipboard } = useClipboard({ timeout: 2000})
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if(provider === "clipboard") {
          return await handleClipboard(url)
        }
        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider not supported: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600, height=600, location=yes, status=yes'
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleClipboard, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copied" : "Copy link",
        icon: isCopied ? <CheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />,
        action: () => share("clipboard"),
      }
    ],
    [share, isCopied]
  );

  return { shareButtons };
};