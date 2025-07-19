import { Tabs } from 'expo-router';
import React from 'react';
import "../global.css"

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
        }}
      />
    </Tabs>
  );
}
