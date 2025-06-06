/* eslint-disable import/no-extraneous-dependencies */
import { components, ThemeProvider } from '@bifold/core'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

import { BCThemeNames } from '@/constants'
import { themes } from '@/theme'

const Button = components.buttons.Button.default
const ButtonType = components.buttons.Button.ButtonType

storiesOf('Button', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('All', () => {
    const items = []
    for (const buttonType of [ButtonType.Primary, ButtonType.Secondary, ButtonType.Critical]) {
      let title = 'Primary'
      switch (buttonType) {
        case ButtonType.Secondary:
          title = 'Secondary'
          break
        case ButtonType.Critical:
          title = 'Critical'
          break
      }
      for (const enabled of [true, false]) {
        items.push(
          <Text>
            {title} (enabled={`${enabled}`})
          </Text>
        )
        items.push(<Button buttonType={buttonType} title={title} disabled={!enabled} />)
      }
    }
    return (
      <ThemeProvider themes={themes} defaultThemeName={BCThemeNames.BCWallet}>
        <SafeAreaView>
          <ScrollView>
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>{items}</View>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    )
  })
