import React from "react"
import styled, { css } from "../utils/styled-components"
import { useQuery } from "react-query"
import axios from "axios"
import { RiSpotifyLine, RiPauseLine, RiPlayLine } from "react-icons/ri"
import mediaQueries from "../utils/media-queries"

const getCurrentTrack = async () => {
  const { data } = await axios.get(
    "https://0x3ipqq2hc.execute-api.eu-west-1.amazonaws.com/prod/spotify"
  )

  return data
}

const SpotifyNowPlaying = () => {
  const { status, data, error, isFetching } = useQuery(
    "playing",
    getCurrentTrack,
    {
      refetchInterval: 60000,
    }
  )

  if (error) return null

  if (data?.item) {
    const artist = data.item.artists[0].name
    const track = data.item.name
    const image = data.item.album.images[2].url
    const externalUrl = data.context?.external_urls
      ? data.context.external_urls.spotify
      : ""

    return (
      <Wrapper>
        <a href={externalUrl} target="_blank" rel="noreferrer">
          <RiSpotifyLine />
          {data.is_playing ? <RiPlayLine /> : <RiPauseLine />}
          <p>
            {artist} - {track}
          </p>
        </a>
      </Wrapper>
    )
  } else {
    return null
  }
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    ${mediaQueries("md")`display: flex`}
    margin-right: 30px;
    padding: 0 20px;
    background: ${theme.colors.primary};
    border-width: 1px;
    border-color: ${theme.colors.accent};
    border-style: solid;
    border-bottom: none;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: ${theme.fonts.colors.primary};
    }
    p {
      font-size: ${theme.fonts.sizes.sm};
    }
    svg {
      width: 20px;
      height: 20px;
    }
  `}
`

export default SpotifyNowPlaying
