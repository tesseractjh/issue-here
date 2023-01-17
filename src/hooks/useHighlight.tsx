import styled from 'styled-components';

interface Params {
  text: string;
  query: string;
}

const extractKeywords = (query: string) => {
  const replaced = [...new Set(query.split(/[^0-9a-zA-Z-_]+/))];

  if (
    [...replaced.join('')].every((char) => char === '-') ||
    [...replaced.join('')].every((char) => char === '_')
  ) {
    return replaced.filter(Boolean);
  }
  return replaced.flatMap((str) => str.split(/[-_]+/)).filter(Boolean);
};

const Highlighted = styled.span`
  background-color: ${({ theme }) => theme.lightColor.YELLOW};
`;

function useHighlight({ text, query }: Params) {
  const keywords = extractKeywords(query);
  let highlightCount = 0;

  return text
    .replace(new RegExp(keywords.join('|'), 'gi'), (match) => `%!${match}%`)
    .split(/%+/)
    .map((str) => {
      if (str.startsWith('!') && str.length > 1) {
        highlightCount += 1;
        return (
          <Highlighted key={highlightCount} className="highlighted">
            {str.slice(1)}
          </Highlighted>
        );
      }
      return str;
    })
    .filter(Boolean);
}

export default useHighlight;
