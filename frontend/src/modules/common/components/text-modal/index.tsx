import React from 'react';
import { theme } from '../../../../theme';
import { Button } from '../button';
import { Wrapper, Text, Space, ModalButton } from './text-modal.styled';

interface ITextModalProps {
  maxWidth?: string;
  minWidth?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
  text?: Array<{ text: string; type?: string; colored?: string }>;
  buttonText?: string;
  contentType?: string;
  backgroundImage?: string;
  buttons?: Array<{ text: string; colored?: string; end?: boolean }>;
}

const TextModal = ({
  maxWidth,
  color,
  fontSize,
  fontWeight,
  marginTop,
  buttonText,
  text,
  contentType,
  minWidth,
  backgroundImage,
  buttons,
}: ITextModalProps) => {
  const renderText = () => {
    return (
      <>
        {!!text?.length &&
          text.map((item, i) => {
            const isTitle = !!item.type;
            return (
              <>
                {!!i && <Space />}

                <Text
                  key={item.text}
                  fontWeight={isTitle ? fontWeight : ''}
                  fontSize={isTitle ? fontSize : ''}
                >
                  {item.text}
                  {!!item.colored && (
                    <Text
                      fontSize={'45px'}
                      fontWeight={fontWeight}
                      color={color}
                    >
                      {` ${item.colored}`}
                    </Text>
                  )}
                </Text>
              </>
            );
          })}
      </>
    );
  };

  const rendredButtons = () => {
    return (
      <>
        <Text fontSize={theme.fonts.xxl} fontWeight={theme.fontWeights.bold}>
          3 easy steps
        </Text>
        {buttons?.map((item, i) => {
          return (
            <ModalButton key={item.text}>
              <Text
                key={item.text}
                fontWeight={theme.fontWeights.bold}
                fontSize={theme.fonts.xxxl}
              >
                {
                  <Text
                    color="black"
                    fontSize={'36px'}
                    fontWeight={theme.fontWeights.bold}
                  >
                    {`${i + 1}. `}
                  </Text>
                }
                {!!item.colored && !item.end && (
                  <Text
                    fontSize={'36px'}
                    fontWeight={theme.fontWeights.bold}
                    color={color}
                  >
                    {`${item.colored} `}
                  </Text>
                )}
                {item.text}
                {item.end && !!item.colored && (
                  <Text
                    fontSize={'36px'}
                    fontWeight={theme.fontWeights.bold}
                    color={color}
                  >
                    {` ${item.colored}`}
                  </Text>
                )}
              </Text>
            </ModalButton>
          );
        })}
      </>
    );
  };

  return (
    <Wrapper
      backgroundImage={backgroundImage}
      minWidth={minWidth}
      marginTop={marginTop}
      maxWidth={maxWidth}
      contentType={contentType}
    >
      {contentType ? rendredButtons() : renderText()}
      {!!buttonText && (
        <Button
          text={buttonText}
          background={theme.colors.buttonModal}
          color={theme.colors.white}
          borderRadius={50}
          width={'256px'}
          height={'75px'}
          marginTop={'44px'}
        />
      )}
    </Wrapper>
  );
};

export default TextModal;
