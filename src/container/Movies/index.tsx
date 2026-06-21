import { useState } from "react";
import { usePopular } from "../../hooks/usePopular";
import { useNowPlaying } from "../../hooks/useNowPlaying";
import { useUpcoming } from "../../hooks/useUpcoming";
import { useTop } from "../../hooks/useTop";
import { useSearch } from "../../hooks/useSearch";
import MovieGrid from "../../components/movies/moviesGrid";

type Tab = "now-playing" | "popular" | "upcoming" | "top";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("now-playing");
  const [page, setPage] = useState(1);

  const { searchedMovie, loading: searchLoading, totalPages: searchTotal } = useSearch(searchQuery, page);
  const { nowPlayingList, loading: nowLoading, totalPages: nowTotal } = useNowPlaying(page);
  const { popularMovie, loading: popularLoading, totalPages: popularTotal } = usePopular(page);
  const { upcomingList, loading: upcomingLoading, totalPages: upcomingTotal } = useUpcoming(page);
  const { topList, loading: topLoading, totalPages: topTotal } = useTop(page);

  const tabs: { key: Tab; label: string }[] = [
    { key: "now-playing", label: "Now Playing" },
    { key: "popular", label: "Popular Movies" },
    { key: "upcoming", label: "Upcoming Movies" },
    { key: "top", label: "Top Movies" },
  ];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-center mb-6">
        <input
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2.5 rounded-lg bg-peach-light text-stone-800 placeholder-stone-400 shadow-md focus:outline-none focus:ring-2 focus:ring-red focus:border-red transition-all duration-200"
        />
      </div>
      {searchQuery.trim() ? (
        <MovieGrid
          movies={searchedMovie}
          loading={searchLoading}
          page={page}
          totalPages={searchTotal}
          onPageChange={handlePageChange}
        />
      ) : (
        <>
          <div className="flex gap-2 mb-6 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-6 py-2 rounded-lg font-semibold shadow-sm transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-red text-white shadow-md"
                    : "bg-peach-light text-stone-800 hover:bg-peach"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "now-playing" && (
            <MovieGrid movies={nowPlayingList} loading={nowLoading} page={page} totalPages={nowTotal} onPageChange={handlePageChange} />
          )}
          {activeTab === "popular" && (
            <MovieGrid movies={popularMovie} loading={popularLoading} page={page} totalPages={popularTotal} onPageChange={handlePageChange} />
          )}
          {activeTab === "upcoming" && (
            <MovieGrid movies={upcomingList} loading={upcomingLoading} page={page} totalPages={upcomingTotal} onPageChange={handlePageChange} />
          )}
          {activeTab === "top" && (
            <MovieGrid movies={topList} loading={topLoading} page={page} totalPages={topTotal} onPageChange={handlePageChange} />
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
