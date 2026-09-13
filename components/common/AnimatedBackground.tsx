const StaticGridBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
            {/* Pure static architectural grid background */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,15,15,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,15,15,0.04)_1px,transparent_1px)]"
                style={{ 
                    backgroundSize: '4rem 4rem'
                }}
            />
        </div>
    );
};

export default StaticGridBackground;
