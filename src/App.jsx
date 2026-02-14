const wardrobeItems = [
  'Beige Jacket', 'Cream Tee', 'Black Hoodie', 'Camel Jacket',
  'Blue Jeans', 'Khaki Pants', 'Denim Jeans', 'Black Jeans',
  'Black Sneakers', 'Brown Loafers', 'White Trainers', 'Leather Shoes'
];

const looks = [
  { name: 'Casual Chic', outfit: 'Beige Knit + Dark Shorts + White Sneakers', action: 'Wear Today' },
  { name: 'Sporty Style', outfit: 'Black Hoodie + Olive Joggers + Runners', action: 'Save Outfit' },
  { name: 'Smart Casual', outfit: 'Blazer + Chinos + Loafers', action: 'Save Outfit' }
];

function PhoneCard({ title, children }) {
  return (
    <div className="phone-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Arrow() {
  return <div className="arrow">▼</div>;
}

export default function App() {
  return (
    <div className="page">
      <header>
        <h1>Virtual Wardrobe App UX Flow</h1>
      </header>

      <section className="flow-row">
        <PhoneCard title="Welcome to StyleSphere">
          <p className="muted">Your Smart Digital Closet</p>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button className="primary">Login</button>
          <p className="divider">Or continue with</p>
          <div className="social-row">
            <button className="soft">Google</button>
            <button className="soft">Apple</button>
          </div>
          <p className="tiny">Don&apos;t have an account? Sign Up</p>
        </PhoneCard>
        <div className="label">1. Login Screen</div>
      </section>

      <Arrow />

      <section className="flow-row">
        <PhoneCard title="My Wardrobe">
          <input placeholder="Search in wardrobe" />
          <div className="grid">
            {wardrobeItems.map((item) => (
              <div key={item} className="tile">{item}</div>
            ))}
          </div>
          <div className="tabbar">
            <span>Wardrobe</span><span>Pairs</span><span>+</span><span>Store</span><span>History</span>
          </div>
        </PhoneCard>
        <div className="label">2. My Wardrobe</div>
      </section>

      <Arrow />

      <section className="flow-row">
        <div className="wide-card">
          <h3>Today&apos;s Looks</h3>
          <div className="looks">
            {looks.map((look) => (
              <div className="look" key={look.name}>
                <h4>{look.name}</h4>
                <p>{look.outfit}</p>
                <button className="primary">{look.action}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="label">3. Outfit Suggestions</div>
      </section>

      <Arrow />

      <section className="flow-row">
        <PhoneCard title="Add Clothing">
          <ul className="action-list">
            <li>📷 Take Photo</li>
            <li>🖼️ Upload from Gallery</li>
            <li>✂️ Auto Remove Background</li>
            <li>🏷️ Select Category</li>
          </ul>
          <button className="primary">Add to Wardrobe</button>
        </PhoneCard>
        <div className="label">4. Add Clothing</div>
      </section>

      <Arrow />

      <section className="flow-row">
        <div className="wide-card store">
          <h3>Recommended for You</h3>
          <div className="store-grid">
            <div className="product">Blue Overshirt</div>
            <div className="product">Cream Polo</div>
          </div>
          <h3>Trending Now</h3>
          <div className="store-grid">
            <div className="product">Olive Shacket</div>
            <div className="product">Charcoal Blazer</div>
          </div>
        </div>
        <div className="label">5. Online Store</div>
      </section>

      <Arrow />

      <section className="flow-row">
        <PhoneCard title="Outfit History">
          <ul className="history">
            <li>📅 Jan 12 - Blue Shirt & Black Jeans</li>
            <li>📅 Jan 11 - White Tee & Beige Chinos</li>
            <li>📅 Jan 10 - Formal Suit</li>
          </ul>
        </PhoneCard>
        <div className="label">6. Outfit History</div>
      </section>
    </div>
  );
}
