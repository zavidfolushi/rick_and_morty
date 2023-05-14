import React from "react"
import CharactersPage from "../pages/CharactersPage";
import EpisodesPage from "../pages/EpisodesPage";
import CharactersDetailPage from "../pages/CharactersDetailPage";
import EpisodeDetailPage from "../pages/EpisodeDetailPage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export const routes: IRoute[] = [
    {path: '/', component: CharactersPage},
    {path: '/episodes', component: EpisodesPage},
    {path: '/character/:id', component: CharactersDetailPage},
    {path: '/episodes/:id', component: EpisodeDetailPage},
    // {path: '/launches', component: LaunchesPage},
    // {path: '/rockets', component: RocketsPage},
    // {path: '/launches/:flight_number', component: LaunchDetail},
    // {path: '/upcoming/:flight_number', component: UpcomingDetail},
    // {path: '/rockets/:rocket_id', component: RocketDetail},
    // {path: '/:ship_id', component: ShipPage},
]