import React from 'react';
import { View, Text, Image, TextInput, FlatList, SectionList} from 'react-native';

const CoreComponents = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Core Components 🧱</Text>
      <View style={{ padding: 8, backgroundColor: '#f0f0f0', marginVertical: 8 }}>
        <Text>👀 This is a View</Text>
      </View>
      <Text> 📖 This is Text</Text>
      <Image
        source={{ uri: 'rca.jpeg' }}
        style={{ width: 50, height: 50, marginVertical: 8 }}
      />
      <TextInput placeholder="Type a spell..." style={{ borderWidth: 1, padding: 8, marginVertical: 8 }} />
      <FlatList
        data={[{ id: '1', name: 'Spell 1' }, { id: '2', name: 'Spell 2' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>✨ {item.name}</Text>}
        style={{ marginVertical: 8 }}
      />
      <SectionList
        sections={[
          { title: 'Fire Spells', data: ['Flame Burst', 'Inferno'] },
          { title: 'Ice Spells', data: ['Ice Shard', 'Blizzard'] },
        ]}
        renderItem={({ item }) => <Text>❄️ {item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default CoreComponents;
