import { hoc } from '@utils/hoc';
import { useDomainsProps } from './domains.props';
import { DomainsContainer } from './domains.style';

/**
 * <Domains />
 */
export const Domains = hoc(useDomainsProps, () => (
  <DomainsContainer>
    Domains
  </DomainsContainer>
));
