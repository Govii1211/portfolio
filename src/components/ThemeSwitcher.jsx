const colors = ["#f5c518", "#e74c3c", "#1abc9c", "#9b59b6", "#ff8c5a", "#2bb5d8"];

function ThemeSwitcher({ color, onChange }) {
  return (
    <div className="theme-switcher">
      {colors.map((c) => (
        <button
          key={c}
          className={c === color ? "swatch active" : "swatch"}
          style={{ background: c }}
          onClick={() => onChange(c)}
          title={c}
        />
      ))}
    </div>
  );
}

export default ThemeSwitcher;
