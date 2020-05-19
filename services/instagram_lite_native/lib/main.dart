import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() {
  runApp(InstagramLite());
}

class InstagramLite extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Instagram Lite', home: HomePage(title: 'Instagram Lite'));
  }
}

class Feeds extends StatelessWidget {
  List _feeds = [];

  _buildFeeds() {
    return ListView(children: _feeds);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(body: _buildFeeds());
  }
}

class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.photo_camera),
        title: Text('Instagram Lite'),
        actions: <Widget>[Icon(Icons.send)],
      ),
      body: PageView(children: [Container(child: Feeds())]),
      bottomNavigationBar: BottomNavigationBar(items: const [
        BottomNavigationBarItem(icon: Icon(Icons.home), title: Text('')),
        BottomNavigationBarItem(icon: Icon(Icons.search), title: Text('')),
        BottomNavigationBarItem(icon: Icon(Icons.add), title: Text('')),
        BottomNavigationBarItem(icon: Icon(Icons.thumb_up), title: Text('')),
        BottomNavigationBarItem(icon: Icon(Icons.person), title: Text('')),
      ]),
    );
  }
}

class InstagramFeeds extends StatefulWidget {
  @override
  InstagramFeedsState createState() => InstagramFeedsState();
}

class InstagramFeedsState extends State<InstagramFeeds> {
  final _feeds = [];

  Widget _buildRow(pair) {
    return ListTile(title: Text(pair.asPascalCase));
  }

  Widget _buildFeeds() {
    return ListView.builder(
        padding: const EdgeInsets.all(16),
        itemBuilder: (context, i) {
          if (i.isOdd) {
            return Divider();
          }

          final index = i ~/ 2;

          if (index >= _feeds.length) {
            _feeds.addAll(generateWordPairs().take(10));
          }

          return _buildRow(_feeds[index]);
        });
  }

  Widget build(BuildContext context) {
    return Scaffold(body: _buildFeeds());
  }
}
